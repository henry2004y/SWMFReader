# SWMF
[![](https://travis-ci.com/henry2004y/VisAnaJulia.svg?branch=master)][travis-url]
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![](https://img.shields.io/badge/docs-latest-blue.svg)][VisAna-doc]
[![][codecov-img]][codecov-url]

SWMF data reader and converter using Julia.

This is originally part of the [VisAna.jl](https://github.com/henry2004y/VisAnaJulia) package.
Later this was moved out and became an stand-alone package for better usage in Python.

For more details, please check the [document][VisAna-doc].

## Prerequisites

Julia 1.0+

## Installation
```
using Pkg
Pkg.add(PackageSpec(url="https://github.com/henry2004y/SWMF", rev="master"))
```

## Usage
```
#using Pkg; Pkg.activate(".") # for dev only
using SWMF
```

See the [examples](docs/src/man/examples.md).

## Guides

This package provides the following functionalities:
  * simulation data reader
  * data format conversion
  * programming language interoperability

See [here](docs/src/man/guide.md) for some development thoughts.

## Author

* **Hongyang Zhou** - *Initial work* - [henry2004y](https://github.com/henry2004y)

## Acknowledgments

* All the nice guys who share their codes!

[travis-url]: https://travis-ci.com/henry2004y/VisAnaJulia/builds/
[codecov-img]: https://codecov.io/gh/henry2004y/VisAnaJulia/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/henry2004y/VisAnaJulia
[VisAna-doc]: https://henry2004y.github.io/VisAnaJulia/dev
