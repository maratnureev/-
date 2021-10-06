using System.Collections.Generic;

public static class GlobalMembers
{
	internal SortedDictionary<int, SpeedLimit> carGearSpeedMap = new SortedDictionary<int, SpeedLimit>()
	{
		{
			-1, {-20, 0}
		},
		{
			0, {-20, 150}
		},
		{
			1, {0, 30}
		},
		{
			2, {20, 50}
		},
		{
			3, {30, 60}
		},
		{
			4, {40, 90}
		},
		{
			5, {50, 150}
		}
	};


}