
import Dexie from 'dexie';

let db = new Dexie("ProjectsDatabase")
db.version(1).stores({
    projects: "++id,timestamp,project,event"
});

export default db;