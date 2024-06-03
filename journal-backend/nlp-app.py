from fastapi import FastAPI
from pydantic import BaseModel

from scripts.nlpFunctions import createDoc, getEntities

app = FastAPI()

class Sentence(BaseModel):
    sentence: str

@app.post("/api-nlp/tags")
async def get_tags(sentence: Sentence):
    doc = createDoc(sentence.sentence)
    return getEntities(doc)[:3]