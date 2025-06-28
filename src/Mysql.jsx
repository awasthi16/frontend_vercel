import React from "react";

const sqlTopics = [
  {
    title: "DDL - Data Definition Language",
    example: `CREATE TABLE students (id INT, name VARCHAR(50));\nALTER TABLE students ADD age INT;\nDROP TABLE students;`,
  },
  {
    title: "DML - Data Manipulation Language",
    example: `INSERT INTO students (id, name) VALUES (1, 'John');\nUPDATE students SET name = 'Jane' WHERE id = 1;\nDELETE FROM students WHERE id = 1;`,
  },
  {
    title: "DCL - Data Control Language",
    example: `GRANT SELECT ON school.* TO 'user'@'localhost';\nREVOKE SELECT ON school.* FROM 'user'@'localhost';`,
  },
  {
    title: "TCL - Transaction Control Language",
    example: `START TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;\n-- Or use ROLLBACK to undo`,
  },
  {
    title: "DQL - Data Query Language",
    example: `SELECT * FROM students;\nSELECT name, age FROM students WHERE age > 18 ORDER BY age DESC;`,
  },
  {
    title: "Constraints in SQL",
    example: `CREATE TABLE users (\n  id INT PRIMARY KEY,\n  email VARCHAR(100) UNIQUE,\n  age INT CHECK (age > 17),\n  FOREIGN KEY (id) REFERENCES students(id)\n);`,
  },
  {
    title: "Joins (INNER, LEFT, RIGHT, FULL)",
    example: `-- INNER JOIN\nSELECT s.name, c.course FROM students s\nJOIN courses c ON s.id = c.student_id;\n\n-- LEFT JOIN\nSELECT s.name, c.course FROM students s\nLEFT JOIN courses c ON s.id = c.student_id;`,
  },
  {
    title: "Subqueries",
    example: `SELECT name FROM students WHERE age = (SELECT MAX(age) FROM students);`,
  },
  {
    title: "Views",
    example: `CREATE VIEW teen_students AS\nSELECT * FROM students WHERE age BETWEEN 13 AND 19;`,
  },
  {
    title: "Indexes",
    example: `CREATE INDEX idx_name ON students(name);`,
  },
  {
    title: "Stored Procedures",
    example: `DELIMITER //\nCREATE PROCEDURE ShowAll()\nBEGIN\n  SELECT * FROM students;\nEND //\nDELIMITER ;`,
  },
  {
    title: "Triggers",
    example: `CREATE TRIGGER before_insert_students\nBEFORE INSERT ON students\nFOR EACH ROW\nSET NEW.age = IFNULL(NEW.age, 18);`,
  },
  {
    title: "Functions & Aggregates",
    example: `SELECT COUNT(*), SUM(age), AVG(age), MIN(age), MAX(age)\nFROM students;`,
  },
  {
    title: "Group By & Having",
    example: `SELECT department, COUNT(*)\nFROM employees\nGROUP BY department\nHAVING COUNT(*) > 5;`,
  },
  {
    title: "Set Operators (UNION, INTERSECT)",
    example: `SELECT name FROM students_2024\nUNION\nSELECT name FROM students_2025;`,
  },
  {
    title: "Pattern Matching (LIKE, REGEXP)",
    example: `SELECT * FROM students WHERE name LIKE 'A%';\nSELECT * FROM students WHERE name REGEXP '^J.*n$';`,
  },
  {
    title: "Advanced: CASE, IF, COALESCE",
    example: `SELECT name,\nCASE WHEN age < 18 THEN 'Minor'\n     ELSE 'Adult'\nEND AS status\nFROM students;`,
  },
];

const Mysql = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '30px', color: '#007acc' }}>
        SQL Commands and Queries (All Types)
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {sqlTopics.map((topic, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '18px',
              backgroundColor: '#f8f9fa',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{ fontSize: '1.1rem', color: '#2c3e50', marginBottom: '12px' }}>{topic.title}</h2>
            <pre
              style={{
                backgroundColor: '#eef1f5',
                padding: '12px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                overflowX: 'auto',
              }}
            >
              {topic.example}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mysql;
