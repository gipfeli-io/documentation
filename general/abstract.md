---
id: abstract
sidebar_position: 2
title: "Abstract"
---

Bis heute gibt es nach unserem persönlichen Empfinden keine ansprechenden, intuitiv bedienbaren Gipfeltagebücher zum Sammeln 
von künftigen Touren oder Sammlung und Beschreibung von erledigten Wandertouren. 
Unsere Applikation soll diese Lücke füllen, indem sie eine PWA zur Verfügung stellt, mit der Touren beschrieben 
und sauber dokumentiert werden können. Dies soll mit räumlichen Informationen verknüpft sein – georeferenzierte Fotos sollen 
bei Berichten auf der Karte lokalisiert werden und es soll möglich sein, GPX Tracks hochzuladen und zu visualisieren. 
Gleichzeitig soll die Applikation auch offline zu gewissen Teilen funktionieren, 
sodass z.B. am Abend in der Hütte der vergangene Tag (ganz im Sinne eines Tagebuchs) beschrieben werden kann.

Die Applikation wurde im Frontend mit React und im Backend mit NestJS umgesetzt und lebt gänzlich in der Google Cloud: 
Vom Secret Manager über Cloud SQL bis hin zu Cloud Run werden verschiedenste Services angezogen. 
Die Pipelines für die Staging- und die Produktionsumgebung (als Github Actions) führen jeweils alle Unit- 
und Integrationtests durch, prüfen die Codequalität mittels SonarCloud und erstellen einen Build des Containers. 
Ausserdem werden alle Commits automatisch getestet und gebuildet, sodass wir stets wissen, 
ob unsere Anpassungen korrekt sind.

Mit der Abgabe konnten die Minimalziele erreicht sowie verschiedene Zusatzfeatures 
(WYSIWYG Editor, GPS-Lokalisierung der Bilder, Upload von GPX Files,  Profildarstellung GPX Files) implementiert werden. 
Der Einsatz verschiedenster Open Source Technologien hat sich bewährt und die Applikation bietet einen guten Stand, 
der in Zukunft weiterentwickelt werden kann. Und weil die Applikation gänzlich quelloffen ist, kann jede und jeder 
seine eigene Instanz hosten.