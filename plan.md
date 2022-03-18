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

- Sample EXIF images: https://github.com/ianare/exif-samples/tree/master/jpg

- ROUTES (JSON Server):

  - Done: json server setup
  - POST /images
  - Create Model methods for images save and get (save to s3)

- Extract & parse EXIF Data

  - Fields:

    - Make: "Apple" <string>
    - Model: "iPhone 11" <string>
    - ISOSpeedRatings: 800 <integer>
    - FocalLengthIn35mmFilm: 30 <integer>
    - DateTime: "2022:03:07 19:00:21" <string/DateTime>
    - PixelXDimension: 2316 <integer>
    - PixelYDimension: 3088 <integer>

  - //Done: find EXIF library
  - handle file upload to S3

View -> Uploaded files (React) \* GET /images

- Create file list view in React

## Phase 2

Add Search filtering (basic)

- camera make

## Phase 3

Fancy search (all fields, custom form)
