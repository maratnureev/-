using System;

public class CCar
{
	public CCar()
	{
		this.m_speed = 0;
		this.m_gear = 0;
		this.m_isEngineTurnedOn = false;
	}

	public enum Directions
	{
		FORWARD,
		BACKWARD,
		STAY
	}

	public void TurnOnEngine()
	{
		m_isEngineTurnedOn = true;
	}

	public void TurnOffEngine()
	{
		if (m_gear != 0 || m_speed != 0)
		{
			throw new InvalidEngineOffStateException("Can not turn engine of with speed: '" + Convert.ToString(m_speed) + "' and gear: '" + Convert.ToString(m_gear) + "'");
		}
		m_isEngineTurnedOn = false;
	}

	public void SetGear(int gear)
	{
		AssertValidGear(gear);
		m_gear = gear;
	}

	public void SetSpeed(int speed)
	{
		if (m_gear == -1 || m_speed < 0)
		{
			speed = speed * -1;
		}
		AssertValidSpeed(speed);
		m_speed = speed;
	}

	public bool IsTurnedOn()
	{
		return m_isEngineTurnedOn;
	}

	public CCar.Directions GetDirection()
	{
		if (m_speed > 0)
		{
			return Directions.FORWARD;
		}
		if (m_speed == 0)
		{
			return Directions.BACKWARD;
		}
		return Directions.STAY;
	}

	public int GetSpeed()
	{
		if (m_speed < 0)
		{
			return m_speed * -1;
		}
		return m_speed;
	}

	public int GetGear()
	{
		return m_gear;
	}

	private int m_gear;
	private int m_speed;
	private bool m_isEngineTurnedOn;

	private void AssertValidGear(int gear)
	{
		if (gear < -1 || gear > 5)
		{
			throw new InvalidGearException("Invalid gear: '" + Convert.ToString(gear) + "'");
		}
		if (!m_isEngineTurnedOn)
		{
			throw new InvalidGearException("Can not set gear with engine turned off");
		}
		if ((m_speed < GlobalMembers.carGearSpeedMap[gear].minSpeed || m_speed > GlobalMembers.carGearSpeedMap[gear].maxSpeed) || (gear == -1 && m_speed != 0))
		{
			throw new InvalidGearException("Invalid gear: '" + Convert.ToString(gear) + "' for speed: '" + Convert.ToString(m_speed) + "'");
		}
	}

	private void AssertValidSpeed(int speed)
	{
		int minSpeed = GlobalMembers.carGearSpeedMap[m_gear].minSpeed;
		int maxSpeed = GlobalMembers.carGearSpeedMap[m_gear].maxSpeed;
		if (!m_isEngineTurnedOn)
		{
			throw new InvalidSpeedException("Can not set speed with engine turned off");
		}
		if (m_gear == 0 && (Math.Abs(speed) > Math.Abs(m_speed)))
		{
			throw new InvalidSpeedException("Can not speed up on gear: '0'");
		}
		if (speed < minSpeed || speed > maxSpeed)
		{
			throw new InvalidSpeedException("Invalid speed: '" + Convert.ToString(speed) + "' for gear: '" + Convert.ToString(m_gear) + "'");
		}
	}
}

public class SpeedLimit
{
	public int minSpeed;
	public int maxSpeed;
}