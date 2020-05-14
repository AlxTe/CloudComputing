# To Do Application

Aplicația se poate regăsi la următorul link:

 [http://todosimpre.azurewebsites.net/](http://todosimpre.azurewebsites.net/)

## Introducere

  Având în vedere contextul actual dat de COVID-19, majoritatea angajaților au ajuns să petreacă mult mai mult timp în fața unui laptop sau telefon pentru desfășurarea activităților zilnice pe care le desfășurau la serviciu.  

Astfel, o problema întâlnita frecvent este organizarea și desfășurarea activităților. Această aplicație este o listă "ToDo" ce poate rezolva problema optimizării timpului desfășurării activităților. Din moment ce este realizat un plan, nu rămâne decât să fie aplicat. 

```javascript
function toDo(plan) {
  if (plan > 0) {
    return 'Desfășurare activități în mod optim';
  }
  return 'E timpul să îți faci un plan';
}
```

## Descriere API-uri utilizate

### Gmail API

Gmail API este un RESTful API ce este folosit pentru a accesa căsuța de Gmail și de a trimite mail-uri. Pentru cele mai multe aplicații, Gmail API este cea mai bună soluție pentru accesul la datele din Gmail.

#### Utilizări
 Gmail poate fi folosit într-o varietate de aplicații în care se pot include: 
* Citirea de mail-uri;
* Adăugarea sau ștergerea filtrelor;
* Automatizarea sau programarea trimiterii mesajelor;
* Migrarea email-urilor către alt provider; 

⇥ In aplicatia realizata, am utilizat Gmail API pentru a automatiza trimiterea de mesaje in momentul in care este adaugat un nou Task.

### CosmosDB REST API

Azure Cosmos DB este o baza de date globala prin care se pot crea, interoga si gestiona datele si resursele folosind un SQL API REST.

Azure Cosmos DB REST API ofera acces la resursele bazei de date Azure Cosmos pentru a crea, interoga si a sterge baze de date, documente sau colectii de documente. Pentru a putea utiliza aceste resurse, se trimit request-uri HTTP prin GET, POST, PUT sau DELETE catre o resursa specifica.


## Flux de date

### Exemple de request/response
Afisarea task-urilor
```javascript
app.get('/', (req, res, next) => taskList.showTasks(req, res).catch(next));
```
Adaugarea task-urilor
```javascript
app.post('/addtask', (req, res, next) => taskList.addTask(req, res).catch(next));
```

### Metode HTTP

Metodele HTTP folosite sunt GET și POST.


## Capturi de ecran ale aplicații

Se găsesc în următoarele link-uri:

[https://imgur.com/AP72sFO](https://imgur.com/AP72sFO)

[https://imgur.com/UM2vD3w](https://imgur.com/UM2vD3w)

### License
[MIT](https://choosealicense.com/licenses/mit/)
