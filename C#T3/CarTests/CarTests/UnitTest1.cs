using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CarTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
		public void Test_car_creation()
		{
			CCar car = new CCar();;
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(!isEngineTurnedOn);
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 0);
		}

		[TestMethod]
		public void Test_turn_on_engine_aftercar_creation()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 0);
		}

		[TestMethod]
		public void Test_turn_off_engine_with_0_speed()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.TurnOffEngine();
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(!isEngineTurnedOn);
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 0);
		}

		[TestMethod]
		public void Test_turn_on_first_with_0_speed_and_0_gear()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 1);
			Assert.IsTrue(speed == 0);
		}

		[TestMethod]
		public void TestCase2()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(-1);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == -1);
			Assert.IsTrue(speed == 0);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.STAY);

		}

		[TestMethod]
		public void TestCase4()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(10);
			Assert.ThrowsException<InvalidGearException>(() => car.SetGear(-1));
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 1);
			Assert.IsTrue(speed == 10);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);

		}

		[TestMethod]
		public void TestCase5()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(-1);
			car.SetSpeed(10);
			car.SetGear(0);
			Assert.ThrowsException<InvalidGearException>(() => car.SetGear(-1));
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 10);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.BACKWARD);

		}

		[TestMethod]
		public void TestCase6()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(20);
			car.SetGear(2);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 2);
			Assert.IsTrue(speed == 20);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);

		}

		[TestMethod]
		public void TestCase7()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(30);
			car.SetGear(3);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 3);
			Assert.IsTrue(speed == 30);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);

		}

		[TestMethod]
		public void TestCase8()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(20);
			Assert.ThrowsException<InvalidGearException>(() => car.SetGear(3));
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			bool isEngineTurnedOn = car.IsTurnedOn();
			Assert.IsTrue(isEngineTurnedOn);
			Assert.IsTrue(gear == 1);
			Assert.IsTrue(speed == 20);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);

		}

		[TestMethod]
		public void TestCase9()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(30);
			car.SetGear(2);
			car.SetSpeed(40);
			car.SetGear(4);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 4);
			Assert.IsTrue(speed == 40);
		}

		[TestMethod]
		public void TestCase10()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(30);
			car.SetGear(2);
			car.SetSpeed(40);
			car.SetGear(4);
			car.SetSpeed(90);
			car.SetGear(5);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 5);
			Assert.IsTrue(speed == 90);
		}

		[TestMethod]
		public void TestCase11()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(30);
			car.SetGear(2);
			car.SetSpeed(40);
			car.SetGear(4);
			car.SetSpeed(90);
			car.SetGear(5);
			Assert.ThrowsException<InvalidEngineOffStateException>(() => car.TurnOffEngine());
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 5);
			Assert.IsTrue(speed == 90);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);
		}

		[TestMethod]
		public void TestCaseMaxSpeed()
		{
			CCar car = new CCar(); ;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(30);
			car.SetGear(2);
			car.SetSpeed(40);
			car.SetGear(4);
			car.SetSpeed(60);
			car.SetGear(5);
			car.SetSpeed(150);
			Assert.ThrowsException<InvalidEngineOffStateException>(() => car.TurnOffEngine());
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 5);
			Assert.IsTrue(speed == 150);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);

		}

		[TestMethod]
		public void TestCase12()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(30);
			car.SetGear(2);
			car.SetSpeed(40);
			car.SetGear(4);
			car.SetSpeed(90);
			car.SetGear(0);
			Assert.ThrowsException<InvalidEngineOffStateException>(() => car.TurnOffEngine());
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 90);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);
		}

		[TestMethod]
		public void TestCase13()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(-1);
			car.SetSpeed(10);
			car.SetGear(0);
			car.SetSpeed(9);
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 9);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.BACKWARD);
		}

		[TestMethod]
		public void TestCase14()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			car.SetSpeed(10);
			car.SetGear(0);
			Assert.ThrowsException<InvalidSpeedException>(() => car.SetSpeed(20));
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 10);
			Assert.IsTrue(car.GetDirection() == CCar.Directions.FORWARD);
		}

		[TestMethod]
		public void TestCase15()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			car.SetGear(1);
			Assert.ThrowsException<InvalidSpeedException>(() => car.SetSpeed(40));
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 1);
			Assert.IsTrue(speed == 0);
		}
		[TestMethod]
		public void TestCase16()
		{
			CCar car = new CCar();;
			car.TurnOnEngine();
			Assert.ThrowsException<InvalidGearException>(() => car.SetGear(-2));
			int gear = car.GetGear();
			int speed = car.GetSpeed();
			Assert.IsTrue(gear == 0);
			Assert.IsTrue(speed == 0);
		}
	}
}
