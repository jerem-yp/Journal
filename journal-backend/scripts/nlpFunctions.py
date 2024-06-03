""" Use this file for nlp functions related to spacy."""
from typing import List

SPACY_MODEL = "en_core_web_sm"
import spacy

nlp = spacy.load(SPACY_MODEL)

# Make sure that this is called. All next functions require this object.
def createDoc(sentence: str):
    """ Creates a spacy doc object."""
    return nlp(sentence)

###
def getEntities(doc) -> List[str]:
    """ Gets up to three nouns in the sentence"""
    dep_scores = {"ROOT": 3, "amod": 1.5, "dobj": 2.5, "nsubj": 2.5, "pobj": 2, "nsubjpass": 2}
    values = sorted([(token.text, dep_scores[token.dep_] if token.dep_ in dep_scores else 1) for token in doc if token.pos_ in {"NOUN","ADJ"}], key=lambda x: x[1], reverse=True)
    return [text for text, score in values]

if __name__ == "__main__":
    sentence = "An inspiring thought for the day?"
    doc = createDoc(sentence)
    print(getEntities(doc))