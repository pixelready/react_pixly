# Pix.ly Plan

## Decisions

1. Backend:
   1. DB - PSQL (JSON SERVER for WIP)
      - UUID
      - Image Title
      - File path
      - EXIF Metadata
      - Image dimensions
   2. Model - PixlyApi Class
      - .Save() `POST`
      - .Update() `PATCH` (change title or something)
      - .Get() `GET`
   3. API - Express
      - POST /images
      - PATCH /images
      - GET /images
      - GET / images/:id
      - POST /images/:id/transform/:name
      - GET /images/:id/transform/:name
   4. File Storage - S3
      - no permissions
   5. TBD
      - image filters / transforms library?
2. Frontend:
   1. React + Reactstrap
   2. Routes:
      - /Upload
      - /Edit
      - /View
   3. TBD:
      - file upload component?
      - image editor component?

## Plan of Attack

### Phase 1

Upload w/ Title -> Static Folder + JSON Server Metadata (/Images)

- ROUTES (JSON Server):

  - Done: json server setup
  - POST /images
  - //TODO: Create Model methods for images save and get (save to folder)

- Extract & parse EXIF Data
  - //Done: find EXIF library
  - //TODO: handle file upload

View -> Uploaded files (React) \* GET /images

- //TODO: Create file list view in React

## Phase 2

Add Search filtering

- location?
