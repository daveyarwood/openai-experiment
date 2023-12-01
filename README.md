# OpenAI experiment

A short experiment for the 2023-12-01 GovSpend hackathon.

Goal: write a simple script that can summarize a transcript from Meeting
Intelligence.

## Development

### Setup

Set `OPENAI_API_KEY` to a valid OpenAI API key.

### Running the script

```bash
yarn main
```

This asks OpenAI's GPT 3.5 Turbo model to provide a bullet point summary of the
topics discussed in the sample 45 minute meeting transcript. Example result:

> Topics discussed in the meeting:
>
> - Roll call and acknowledgement of attendees
> - Welcome back from summer break and announcements from council members
> - City manager's priority items
> - City attorney's priority item
> - City clerk's priority item
> - Citizens' comments on various topics including street parking, senior affordable housing, and firemen's pay
> - Discussion on the amendment to the contract for police psychological services
> - Report on board and commission appointments and nominations
> - Settling of the agenda
> - Adjournment of the meeting.

My first attempt was to get it to summarize a 4 hour meeting, and that
transcript is also included in the repo. However, that transcript went well
beyond OpenAI's token limit, which led to an informative discussion with members
of my team with more AI experience, about strategies to get around content
limits when summarizing large bodies of text (multiple documents, etc.).

## Things to try in the future

* Try LangChain tooling instead of calling OpenAI directly. LangChain provides
  some useful tools for [summarizing long documents][langchain-summarization].
  * Try [RecursiveCharacterTextSplitter], in particular. Play with different
    chunk sizes.

* Try the "refine" and "map/reduce" methods of summarization, and compare the
  results.

* Hook this up to the GovSpend API to fetch meeting transcripts at runtime. The
  script could take parameters that correspond to search filters.

[langchain-summarization]: https://js.langchain.com/docs/use_cases/summarization
[RecursiveCharacterTextSplitter]: https://js.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/recursive_text_splitter
