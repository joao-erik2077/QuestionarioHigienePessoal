USE higienepessoal;
SELECT * FROM formulario;

-- Um banho a cada dois dias
SELECT count(*) 'Banho a cada dois dias'
FROM formulario
WHERE p1 = 1;

-- Escovam o dente 2 vezes ao dia
SELECT count(*) 'Escovam o dente duas vezes ao dia'
FROM formulario
WHERE p2 = 2;

-- Tempo médio de banho de 5 minutos
SELECT count(*) 'Tempo médio de banho de 5 minutos'
FROM formulario
WHERE p3 = 1;

-- Não fecham a torneira ao escovar os dentes
SELECT count(*) 'Não fecham a torneira ao escovar os dentes'
FROM formulario
WHERE p4 = 2;

-- Usam fio dental
SELECT count(*) 'Usam fio dental'
FROM formulario
WHERE p5 = 1;

-- Média dos banhos
SELECT ROUND(AVG(p3)) 'Média de tempo de banhos'
FROM formulario;

-- Média dos banhos
SELECT 
CASE
	WHEN ROUND(AVG(p3)) = 1 THEN '5 minutos ou menos'
    WHEN ROUND(AVG(p3)) = 2 THEN '5-10 minutos'
    WHEN ROUND(AVG(p3)) = 3 THEN '10-15 minutos'
    WHEN ROUND(AVG(p3)) = 4 THEN '15 minutos ou mais'
END 'Tempo médio de banhos'
FROM formulario;

-- A maioria fecha a torneira ao escovar o dente?
SELECT IF(ROUND(AVG(p4)) = 1, 'Sim', 'Não') 'A maioria fecha a torneira ao escovar o dente?'
FROM formulario;
