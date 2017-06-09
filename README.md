# DaansTabs
---

DaansTabs is een JQuery plugin waarmee gemakkelijk een tab-menu in de site geïmplementeerd kan worden.

## Installatie
---

git clone https://github.com/Wekuhlmann/daansTabs.git

of je kan de plugin op local zetten.

  - Download de files
  - Kopieer de files naar de root van je website.
  - kopieer onderstaande code naar de <head> van je html.
```sh
<link rel="stylesheet" type="text/css" href="style/daanstabs.css">
<script src="daanstabs.js"></script>
```

## Default settings
---
De plugin heeft een paar standaard-instellingen die veranderd kunnen worden.
```sh
		 var settings = $.extend({
            /* These are the defaults.*/
            duration: 1000,/*animatie-snelheid.*/
			background:"red",/*achtergrondkleur van de tabs.*/
			menuside:"right"/*de kant waar het menu staat.*/
			
        }, options );
```

### duration
De tijd die het duurt voordat een tabblad helemaal is uitgeklapt. De tijd is in ms.

### background
De achtergrondkleur van alle tabs. Hier kan een kleur worden ingevoerd als html-tekst maar ook als hex.

### menuside
De kant waar het menu staat. Hierbij kan voor links of recht gekozen worden (_left_ or _right_)

## Activeren
---
Het script kan geactiveerd worden door volgende code in de <head> van de html te plaatsen:
```sh
$( document ).ready(function() {		
		$( "daans-tabs" ).daansTabs({
		});
});
</script>
```
Mocht je opties willen aanpassen kan dat door de opties te veranderen tijdens de initialisatie, bijvoorbeeld:
```sh
$( document ).ready(function() {		
		$( "daans-tabs" ).daansTabs({
		    duration: 400,
		    background:"yellow",
		    menuside:"left"
		});
});
</script>
```
Nu zullen de animaties sneller verlopen, de achtergrond van de tabs zal geel zijn en het menu zal nu aan de rechterkant verschijnen.
## HTML-structuur
---
Dit is een voorbeeld van de gewenste HTML-structuur. Er hoeft geen id en href te worden gegeven aan de links en tabs. De eerst link verwijst naar de eerste tab, de tweede naar de tweede, etc.
```sh
	<div class="daans-tabs">
        <ul class="tab-links">
            <li><a>test1</a></li>
            <li><a>test2</a></li>
            <li><a>test3</a></li>
            <li><a>test4</a></li>
            <li><a>test5</a></li>
        </ul>
    
        <div class="tab-content">
            <div class="tab">
                <p>Testtekst1</p>
            </div>
            <div class="tab">
                <p>Testtekst2</p>
            </div>
            <div class="tab">
                <p>Testtekst3</p>
            </div>   
            <div class="tab">
                <p>Testtekst4</p>
            </div>   
            <div class="tab">
                <p>Testtekst5</p>
            </div>           
        </div>
    </div>
```
---
