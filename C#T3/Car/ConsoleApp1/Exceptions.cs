public class InvalidSpeedException : System.Exception
{
	public InvalidSpeedException(string msg)
	{
		this.m_msg = msg;
	}

//C++ TO C# CONVERTER WARNING: 'const' methods are not available in C#:
//ORIGINAL LINE: string GetMessage() const
	public string GetMessage()
	{
		return (m_msg);
	}

	private string m_msg = "";
}

public class InvalidGearException : System.Exception
{
	public InvalidGearException(string msg)
	{
		this.m_msg = msg;
	}

//C++ TO C# CONVERTER WARNING: 'const' methods are not available in C#:
//ORIGINAL LINE: string GetMessage() const
	public string GetMessage()
	{
		return (m_msg);
	}

	private string m_msg = "";
}

public class InvalidEngineOffStateException : System.Exception
{
	public InvalidEngineOffStateException(string msg)
	{
		this.m_msg = msg;
	}

//C++ TO C# CONVERTER WARNING: 'const' methods are not available in C#:
//ORIGINAL LINE: string GetMessage() const
	public string GetMessage()
	{
		return (m_msg);
	}

	private string m_msg = "";
}
