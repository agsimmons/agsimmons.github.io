---
title: Musicbrainz for Local Music Tags
permalink: /posts/musicbrainz-for-local-music-tags/
---
## Introduction
Local music libraries require the curation of it's tags both to ensure the accuracy of these tags, and to enforce particular stylistic preferences. This process of tagging files manually is time-consuming and error-prone.

Throughout this post, I will argue that utilizing [Musicbrainz](https://musicbrainz.org/) to associate local files with database entries:
- Takes less time than the alternative of manually tagging music
- Allows for efforts towards each metadata correction to benefit all owners of that release
- Allows for uniformly enforcing stylistic preferences across one's music library

## Why Do We Care About Metadata?
Devoting time and effort towards getting metadata right is important, as it is the metadata that allows us to organize data into a structure that can be easily accessed at a later time.

Additionally, the metadata of music must be preserved in order to properly preserve the music itself. The title, artist, contributors, relations between works, and more are all parts of a work in the context of historical preservation.

## The Past: Local Tagging
The status quo of music tagging is to manually maintain a set of metadata across your music library.

The source of truth for each file exists on that same file. Files that you ingest into your collection may come with local metadata, however it may contain factual errors, or need to be adjusted to conform to your personal style specifications. Tags that you apply yourself may also contain errors.

Tagging music manually is a time-consuming process, and any corrections that you make will only benefit your local library.

## The Future: Musicbrainz
Instead of manually tagging your local music files, you can link your tracks and releases to unique IDs that exist within the Musicbrainz database. This offloads the source of truth for each track and release to the Musicbrainz database. Users make corrections to the metadata within Musicbrainz rather than the local metadata on their files.

Because the source of truth is the Musicbrainz database, any corrections can then be pulled down automatically to users' local files using software. This reduces the overall effort required to make corrections, as corrections are automatically made available to everyone else who cares about the music they apply to.

## Why Musicbrainz?
There are various different music metadata databases online, such as Discogs or VGMDB. I believe that we as a community should be focusing our efforts on contributing to Musicbrainz for a few different reasons:

### Community Driven
Musicbrainz is powered by its community. Users can easily register and begin contributing metadata about new releases and edits to existing releases. Users can also participate in voting on edits of other users to ensure that only accurate edits are accepted into the database.

### Non-profit
Metabrainz, the group responsible for developing and maintaining the Musicbrainz project, is a non-profit organization. This helps ensure that their motivation is to create the best database of music metadata possible, and not to increase profits at the expense of the metadata quality or availability.

### Permissive License
The core data within Musicbrainz is licensed under the CC0 1.0 Universal License, effectively placing it into the public domain. This means that other users and services may repurpose the metadata in Musicbrainz for their own purposes, commercial or non-commercial. This both expands the usefulness of the data within Musicbrainz and provides assurance that, in the event that Musicbrainz were to disappear, it's metadata could still be used for future projects.

## Mirroring
Musicbrainz allows for technical users to mirror the state of the Musicbrainz database into their own instance of the database. The owner of the mirror can control the rules related to its access, as requests will only go to the mirror rather than the official database. This allows for the full Musicbrainz database to be used unrestricted by other projects that can utilize it's metadata, and it also ensures that an accurate copy of the database will be available in the event of Musicbrainz shutting down.

### API Access
Musicbrainz allows for API access to the data in its database, meaning that applications can pull metadata from Musicbrainz without requiring the user to manually browse the website in a web browser. This is utilized in software such as Beets or Musicbrainz Picard, which associates local music releases with unique Musicbrainz releases.

### CoverArtArchive
Musicbrainz partners with [The Internet Archive](https://archive.org/) to provide the [CoverArtArchive](https://coverartarchive.org/) service. This service allows for the storage of lossless image files relating to releases in the Musicbrainz database. This includes cover art as well as additional imagery such as scans.

Discogs, Musicbrainz’s largest competitor, resizes all images to a maximum size of 600x600 pixels. This results in a loss of information that can't be recovered.

## Programatically Enforcing Stylistic Preferences?
Having an accurate base set of metadata for each release allows for stylistic preferences to be applied uniformly and programatically across one's library. For example, if one wishes artists in their library whose names begin with "The" to instead have the "The" moved to the end of the artist name (For example, converting "The Beatles" to "Beatles, The"), one can specify this preference within the software of their choice. This software can automatically enforce this preference across all releases in a library.

This is an area where software support is occasionally lacking. This current lack of support should not be taken as proof that these types of programmatically enforced stylistic preferences are impossible, rather it should highlight areas where software can improve their functionality in the future.

## Problems With Musicbrainz
Musicbrainz currently does a lot right, but there are some areas where improvements can be made.

### Lack of Software Support
There are some great pieces of software such as Beets and Musicbrainz Picard that integrate very closely with the Musicbrainz database. Outside these programs, support is not always easy to find.

Through raising the popularity of Musicbrainz, developers will take notice as users express interest in improved support.

### Translation/Transliteration Support
Currently, Musicbrainz does not have a great method of keeping track of translations or transliterations for tracks and releases. Often, people will have music in their library in a language that they can not read, and a stylistic preference is that the music be renamed, either with translations or transliterations (phonetic spelling in the script that the user understands).

Currently, Musicbrainz uses pseudo-releases for this purpose, but this requires the duplication of metadata, and it can't be easily accessed by software.

## Conclusion
Musicbrainz being community driven, open, and programatically accessible positions it to be the perfect database for music metadata. If the community of music collectors focus their efforts towards improving the quality and quantity of metadata within Musicbrainz, we will waste less effort correcting the same errors multiple times, and we will preserve more metadata in a format that will remain accessible.
