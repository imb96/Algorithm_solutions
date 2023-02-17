SELECT AI.NAME, AI.DATETIME FROM ANIMAL_INS AI 
LEFT JOIN ANIMAL_OUTS AO ON AI.ANIMAL_ID = AO.ANIMAL_ID
WHERE AO.ANIMAL_ID IS NULL
ORDER BY AI.DATETIME ASC
LIMIT 3