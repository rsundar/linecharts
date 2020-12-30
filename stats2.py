from datetime import datetime, timedelta
from tinydb import TinyDB, Query
from unicodedata import normalize
import psutil
import json
import os

db = TinyDB('statistics.json')
query = Query()

def keepItFresh():
    time = datetime.now()
    ids = list()
    for i in iter(db):
        t = datetime.strptime(normalize('NFKD',json.loads(i['time'])).encode('ascii','ignore'), '%Y-%m-%d %H:%M:%S.%f')
        res = time - t
        if (res.total_seconds() >= 30) and len(db) > 15:
            ids.append(i.doc_id)
    db.remove(doc_ids=ids)

def main():
    cpu = dict()
    rest = dict()

    cpu['time'] = json.dumps(str(datetime.now()))
    cpu['percent'] = psutil.cpu_percent(interval=1)
    rest['memory'] = psutil.virtual_memory().percent
    rest['disk'] = psutil.disk_usage('/').percent
    rest['swap'] = psutil.swap_memory().percent
    
    if len(db) > 15:
        keepItFresh()
        db.insert(cpu)
    else:
        db.insert(cpu)
    
    os.chdir('/home/vagrant')
    with open("rest.json","w") as outfile:
        json.dump(rest, outfile)


if __name__ == "__main__":
    main()
