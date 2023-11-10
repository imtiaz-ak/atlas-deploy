# Data Description

This section provides descriptions for the data items in the data folder.

Bangladesh's geographical regions are divided into divisions (bibhag), districts (jela) and subdistricts (upojela). There are different json and geojson files for different levels of required granularity.


### Sub-districts/Upojela Geojson

The [bd_upojelas.geojson](./bd_upojelas.geojson) file has geojson items to list geographical boundaries of each. The original file was obtained from [here](https://github.com/fahimreza-dev/bangladesh-geojson), and modified with updated names for the districts/subdistricts to use modern spelling. Here is an example entry with the **important keys mentioned only**.

```
{ 
    "type": "Feature",
    "properties": { 
        "NAME_1": Division name e.g "Dhaka",  
        "NAME_2": Unsure about the granulity of this variable, 
        "NAME_3": District/Jela name e.g "Kishoreganj", 
        "NAME_4": Subdistrict/Upojela name e.g "Bhairab"
    },
    "geometry": { 
        "type": "MultiPolygon", 
        "coordinates": [ [ [ List of [longitude, latitude] boundaries for the subdistrict ] ] ] 
    }
}
```

### Districts/Jela Geojson

The [bd_districts.geojson](./bd_districts.geojson) file is the same as the one above, but the level of granularity is at a district level. This was obtained by merging the sub-districts based on district name using QGIS. 

```
{ 
    "type": "Feature",
    "properties": { 
        "NAME_1": Division name e.g "Dhaka",  
        "NAME_2": Unsure about the granulity of this variable, 
        "NAME_3": District/Jela name e.g "Kishoreganj", 
        "NAME_4": null
    },
    "geometry": { 
        "type": "MultiPolygon", 
        "coordinates": [ [ [ List of [longitude, latitude] boundaries for the district ] ] ] 
    }
}
```

### Generated District Data

The [generated_districts.json](./generated_districts.json) file contains manually parsed climate variable data for 3 variables, which are annual average of daily maximum temperature, annual average of daily minimum temperature and annual number of days where minimum temperature is greater than 26 degrees. Explanation of how the data was obtained is detailed below.

```
{
    "id": "53",
    "division_id": "7",
    "name": "Sunamganj",
    "bn_name": "\u09b8\u09c1\u09a8\u09be\u09ae\u0997\u099e\u09cd\u099c",
    "lat": "25.0658042",
    "long": "91.3950115",
    "historicalData": {
        "timeRange": "1995-2014",
        "maxTemperature": 30.05,
        "minTemperature": 20.57,
        "nDaysTminMoreThan26": 7.85
    },
    "futureData": {
        "timeRange": "2050",
        "maxTemperature": 31.65,
        "minTemperature": 22.27,
        "nDaysTminMoreThan26": 70.47
    }
}
```

The historical data for all three variables is obtained from the World Bank Climate Change Knowledge Portal API.
It is an average of the climate variable values from the year 1971-2020. This data is available for each division, and
is simply copied over into each district within each division

The future data for `maxTemperature` and `minTemperature` is obtained from the Tables from the [Risk Mapping for Climate Vulnerability (CVRM) of 487 upazilas in Bangladesh](https://drive.google.com/file/d/1Cz6oySUAugPiL0EslRzhJslD2GkSEv3f/view?usp=drive_link) , specifically Table 6.2 and 6.6.
These are climate modelled projections with the following features:
* They are for the year 2050
* They use the RCP 4.5 emissions scenario
* They only contain the delta values for the variable
* They are on a district level precision
* They are obtained from a NASA Earth Exchange Global Daily
Downscaled Projections (NEX-GDDP) from the CMIP5 GCM

Hence the historical average value from World Bank and the delta values from the CVRM were combined to obtain the future projection values. These values are available for each district.

The future data for `nDaysTminMoreThan26` was obtained from the World Bank API with the following features
* They are for the year 2050
* They use the SSP2-4.5 emissions scenario
* They contain both the delta values and the original values
* They are on a division level precision
* They are obtained from the CMIP6 0.25-degree GCM

### World Bank Data
Data from the World Bank's API was collected for the following dimensions. The data is gathered from CMIP6 0.25 Degree models.

1) Climate Variables: 14 Climate Variables which include

| Variable Code Name | Variable Human-Readable Name | Variable Definition |
| :---------------- | :------: | :---- |
| `cdd65` | Cooling Degree Days (ref-65°F) | The cumulative number of degrees that the daily average temperature over a given period is above a specified threshold (here 65°F), which is a measurement designed to quantify the demand for energy needed to cool a building. |
| `hd35` | Number of Hot Days (Tmax > 35°C) | The number of days with daily maximum temperature > 35°C that occurred during the aggregation period. |
| `hd45` | Number of Hot Days (Tmax > 45°C) | The number of days with daily maximum temperature > 45°C that occurred during the aggregation period. |
| `hd40` | Number of Hot Days (Tmax > 40°C) | The number of days with daily maximum temperature > 40°C that occurred during the aggregation period. |
| `prpercnt` | 	Precipitation Percent Change | Projected percent change in total precipitation; anomaly only. |
| `r50mm` | Number of Days with Precipitation >50mm | The number of very heavy precipitation days during the aggregation period. A very heavy precipitation day for r50mm is defined as any day in which the daily accumulated precipitation is ≥ 50 mm. |
| `rx1day` | Average Largest 1-Day Precipitation | The average highest precipitation amount in a 1-day period during each month in the data period. |
| `rx5day` | Average Largest 5-Day Cumulative Precipitation | The average highest precipitation amount over a consecutive 5-day period during each month in the data period. |
| `sd` | 	Number of Summer Days (Tmax > 25°C) | The number of days where the daily maximum temperature is > 25°C in the aggregation period. A positive value indicates an increase in the number of Summer Days. |
| `tasmax` | Average Maximum Surface Air Temperature | Average maximum temperature over the aggregation period |
| `tasmin` | Average Minimum Surface Air Temperature | Average minimum temperature over the aggregation period |
| `tr26` | 	Number of Tropical Nights (T-min > 26°C) | The number of days where the daily minimum temperature remained > 26°C over the aggregation period. |
| `tr29` | Number of Tropical Nights (T-min > 29°C) | The number of days where the daily minimum temperature remained > 29°C over the aggregation period. |
| `txx` | Maximum of Daily Max-Temperature | The single-day maximum value of the daily maximum temperatures over the aggregated data period. |

2) Time Ranges: Averaged values 4 20-Year Periods within the current century
* 2020-2039
* 2040-2069
* 2060-2079
* 2080-2099

3) Emissions Scenarios: 2 Scenarios for carbon emissions based on 
* `ssp245` - SSP2-4.5
* `ssp370` - SSP3-7.0

From Wikipedia -
> Shared Socioeconomic Pathways (SSPs) are climate change scenarios of projected socioeconomic global changes up to 2100.

> SSP2 - "The world follows a path in which social, economic, and technological trends do not shift markedly from historical patterns. Development and income growth proceeds unevenly, with some countries making relatively good progress while others fall short of expectations. Global and national institutions work toward but make slow progress in achieving sustainable development goals. Environmental systems experience degradation, although there are some improvements and overall the intensity of resource and energy use declines. Global population growth is moderate and levels off in the second half of the century. Income inequality persists or improves only slowly and challenges to reducing vulnerability to societal and environmental changes remain.

> SSP3 - "A resurgent nationalism, concerns about competitiveness and security, and regional conflicts push countries to increasingly focus on domestic or, at most, regional issues. Policies shift over time to become increasingly oriented toward national and regional security issues. Countries focus on achieving energy and food security goals within their own regions at the expense of broader-based development. Investments in education and technological development decline. Economic development is slow, consumption is material-intensive, and inequalities persist or worsen over time. Population growth is low in industrialized and high in developing countries. A low international priority for addressing environmental concerns leads to strong environmental degradation in some regions."


4) Divisions: 8 of them

### List of Districts

The [list_of_districts.txt](./list_of_districts.txt) file lists the names of all 64 districts of Bangladesh. This is provided for convenient reference as some of the English spellings of the districts vary across text, mainly because they have changed over time (e.g Comilla to Cumilla, Chittagong to Chattogram).

### Climate Stories

The [climate_stories.json](./climate_stories.json) file lists some districts and associated news links. Used to gather story titles and thumbnails for some districts for visualisation.