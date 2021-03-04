# gekko-quasar-ui  
  
An UI port for gekko trading bot using Quasar framework.  
  
# What i changed?  
  
I compiled packages with quasar/dev@1 (ES6) and upload to github. Why? Because when i tested something and changed stuff was high probability that something crash. Then i always rm -rf gekko folder and start over from scratch. Now i have for myself some backup.  
  
I added button and code (code is copy from one other project) for Restart stopped gekko. When you use restart gekko you must F5 or better CTRL+F5 browser window when site load again or you get on enter in live gekko 404 error. Restart does not restart old instance but take config from old, start new instance and delete old instance...Is better than manual insert from scratch...   
  
I changed CSS because all white was not good for my eyes. Now is red/gray but i need to change to something better  
  
Removed footer bar because it is unnecessary  
  
Remove documentation icon in top bar  
  
Added some info labels when occur latest trade (date with hour), market fee, and portfolio status (FIAT and assets)  


//TO-DO list:  
All...  
But important: Index page with crypto dashboard, better gekko restart (without 404 error or F5), add pannic buy/sell button (i need to decrypth how emmiter work or try with direct api approach), better style, add scratchpad connected to DB (postgres) for saving for example strategy values, integrating GAB (persistent running without open tab) and gekkoga, add option for favorite coins (favorites appear at top of list when you creating new live gekko), add market update buttons so we dont need to update market trough terminal, better date selector (now only hours)...  
  
//bug:  
I'm using moddedgekko and sometimes i have onTerminatedTrade error. I must resolve this and i already have some ideas how to resolve (add functions to baseTradingMethod.js)...
  
# How to install?  
  
Go to your gekko/web folder for example cd /home/user/gekko/web (terminal) and delete all data with rm -rf * (be carefull). Then clone with git clone this repo.  
Change file UIconfig.js in web/vue/dist  
  
Remove unnecessary files (readme.md, picture folder...)  
  
## Screenshots  
  
![image1](img/img5.png?raw=true "Screenshot 1")
![image2](img/img1.png?raw=true "Screenshot 2")
![image3](img/img2.png?raw=true "Screenshot 3")
![image4](img/img3.png?raw=true "Screenshot 4")
![image5](img/img4.png?raw=true "Screenshot 5")
  
# Original from author:

## Guidance on strategy indicator naming conventions

To add flexibility to the way indicators are plotted you can specify on which graph the indicator should be plotted.

This is mainly for indicators that are not designed to have values similar to the coin price. For example SMA, EMA etc. are designed to be plotted against the market, and therefore no specification is needed. However, RSI always operates between 0 and 100 and therefore it would not work to plot this against the market, it needs its own graph.

Under the main market graph, there will be three separate graphs. Each of the three graphs has both a left and right y-axis. Therefore, in total you have six different ranges that you can take advantage of.

### Automatic assignment of indicators

The software will automatically assign indicators to an appropiate axis as long as the indicator is named correctly in the strategy you create. When you initialise an indicator in the strategy, you include a line similar to the following (I will use SMA as an example):

    this.addTalibIndicator('sma', 'sma', params);

The first 'sma'  in the brackets above is used in the graphing. It is important that the naming is the same as the second 'sma' if you wish to use automatic asignment to the correct graph, which in this case would be the market graph.

### Using the same indicator multiple times

In the case that you wish to use an indicator more than once, which is common with indicators like the EMA and SMA, you will need to use the following syntax:

    this.addTalibIndicator('sma__fast', 'sma', params);
    this.addTalibIndicator('sma__slow', 'sma', params);

As you can see the indicator name 'sma' must be used, but you can make the name unique by using a double underscore and adding a unique name after the double underscore. There is no particular requirement for the unique name.

### Specifying which axis to assign the indicator

You may of course want to have complete control over where an indicator gets assigned. In that case you have a couple of options.

#### Change the indicator type

You can change an indicator that is normally plotted on the market graph to be plotted on one of the three graphs below the market, or visa-versa.

To assign an indicator to the market you can use the following syntax:

    this.addTalibIndicator('ovr__rsi', 'rsi', params);

The 'ovr' before the double underscore will assign the indicator as an overlay over the market graph. Please note the part after the double underscore is irrelevant and just to make the name unique, it can be whatever you like.

To assign an indicator to the three charts below the graph, and be assigned to an axis automatically, use the following syntax:

    this.addTalibIndicator('ind__sma', 'sma', params);

### Specify exactly which axis to assign an indicator to

You can gain even more control over the assignment by specifying exactly which of the six y-axis on the graphs below the market you want a particular indicator to be assigned to.

Please note that if you go down this route it is recommended that you specify an axis for all indicators that are not overlayed on the market, otherwise you may end up with the axis scaling being inappropriate due to some indicators being automatically assigned.

To specify an axis you should use the following syntax:

    this.addTalibIndicator('topleft__rsi', 'rsi', params);

The 'topleft' will plot the indicator on the top chart (below the market chart) and on the left axis. You can gain axis to any of the other axis by using one of the following:

1. topleft
2. topright
3. midleft
4. midright
5. botleft
6. botright

## Donations

If you like the ported UI, drop me some coins for coffee ;)

***BTC: 191hR9AftcrGH2Vb29ogPBoUjFowsvAMrk***
