db = db.getSiblingDB('testdb');
db.testcol.insertOne({ message: "MongoDB initialized!" });
