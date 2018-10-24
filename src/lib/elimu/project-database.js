
import Dexie from 'dexie';

let db = new Dexie("ProjectsDatabase")
db.version(1).stores({
    projects: "++id,timestamp,event,project" 
})
db.version(2).stores({
    projects: "++id,timestamp,event" //tambem tem coluna project que nao quero indexar
}).upgrade((tx)=>{return tx.projects.toCollection()});
db.projects.hook('creating', function(){
    db.projects.reverse().offset(15).delete();
})
db.open();

export default db;