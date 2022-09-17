---
id: abstract
sidebar_position: 1
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
Die Pipelines für die Staging- und die Produktionsumgebung (als GitHub Actions) führen jeweils alle Unit- 
und Integrationtests durch, prüfen die Codequalität mittels SonarCloud und erstellen einen Build des Containers. 
Ausserdem werden alle Commits automatisch getestet und gebuildet, sodass wir stets wissen, 
ob unsere Anpassungen korrekt sind.

Mit der Abgabe konnten die Minimalziele erreicht sowie verschiedene Zusatzfeatures 
(WYSIWYG Editor, GPS-Lokalisierung der Bilder, Upload von GPX Files,  Profildarstellung GPX Files) implementiert werden. 
Der Einsatz verschiedenster Open Source Technologien hat sich bewährt und die Applikation bietet einen guten Stand, 
der in Zukunft weiterentwickelt werden kann. Und weil die Applikation gänzlich quelloffen ist, kann jede und jeder 
seine eigene Instanz hosten.

## English Version

To this day, we personally feel that there are no appealing, intuitive summit diaries for documenting
future tours or collection and description of completed hiking tours.
Our application aims to fill this gap by providing a PWA to describe and neatly document tours.
This should be linked to spatial information - geo-referenced photos should be localized on the map,
and it should be possible to upload and visualize GPX tracks.
At the same time, the application should also work offline to some extent,
so that e.g. in the evening in the cabin the past day (in the sense of a diary) can be documented.

The application was implemented in the frontend with React and in the backend with NestJS and lives entirely in the Google Cloud:
From Secret Manager to Cloud SQL to Cloud Run, a wide variety of services are used.
The pipelines for the staging and production environment (as GitHub Actions) perform all unit and integration tests.
They also check the code quality using SonarCloud and create a build of the container.
In addition, all commits are automatically tested and built, so we always know
whether our adjustments are correct.

With the delivery, the minimum goals could be reached and several additional features
(WYSIWYG editor, GPS localization of images, upload of GPX files, profile display of GPX files) could be implemented.
The use of various open source technologies has proven itself and the application offers a good state
which can be further developed in the future. And because the application is completely open source, anyone can host their own instance.

Translated with www.DeepL.com/Translator (free version)