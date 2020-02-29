var documenterSearchIndex = {"docs":
[{"location":"man/guide/#Guide-1","page":"Guide","title":"Guide","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"Demos are provided for calling Matlab/Python directly from Julia for debugging and testing. This part will later be separated out for potential Python and Matlab users. Currently the plotting and interpolation needed during plotting are done in Python. For instance, the 3D scatterred interpolation is done via Interpolate in Scipy. Hopefully these additional dependencies will be cut down.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"The VTK files does not have timestep information. To allow for further time series processing in Paraview, a script create_pvd.jl is provided for generating the pvd container.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"In principle, I could also try some multi-block (VTM) type for data conversion.","category":"page"},{"location":"man/guide/#Tricks-1","page":"Guide","title":"Tricks","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"This is the first time I use Julia for reading general ascii/binary files. It was a pain at first due to the lack of examples and documents using any basic function like read/read!, but fortunately I figured them out myself. One trick in reading binary array data is the usage of view, or subarrays, in Julia. In order to achieve that, I have to implement my own read! function in addition to the base ones.\nTecplot and VTK unstructured data formats have the same connectivity ordering for hexahedron, but different ordering for voxel (in VTK). A function swaprows is implemented to switch the orderings.\nBecause of the embarrassing parallelism nature of postprocessing, it is quite easy to take advantage of parallel approaches to process the data.\nThe built-in streamline function of Matplotlib is not proper for scientifically visualizing field information. The solution is to trace field lines with ODEs and plot the line series, similar to what has been done by Spacepy.","category":"page"},{"location":"man/guide/#Streamline-Tracing-1","page":"Guide","title":"Streamline Tracing","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"2D streamline tracing is almost finished. 3D streamline tracing is on the way. I need an adaptive step control integration scheme like rk45.","category":"page"},{"location":"man/guide/#Particle-Tracing-1","page":"Guide","title":"Particle Tracing","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"I have a plan of incorporating particle tracing into this module. WIP","category":"page"},{"location":"man/guide/#Support-for-more-complicated-grid-structures-1","page":"Guide","title":"Support for more complicated grid structures","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"For the plotting, streamline tracing and particle tracing, a common problem is the grid and related interpolation process. I am envisioning a more general approach to deal with block-based and unstructured grid to provide fundamental support for all of these.","category":"page"},{"location":"man/guide/#-1","page":"Guide","title":"","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"A real open-source project is a collaborated work not only from a bunch of people, but also a group of languages. In Julia, this can be achieved with the help of the Package manager.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"I want to have some C dependencies in my code instead of rewriting everything in Julia. This would serve as an attempt to quickly make things work.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"Right now this seems to be a little bit difficult for me. I need to learn from experts. The tracing scheme in C is rewritten in Julia so I don't need to bother for now. Checkout BinaryBuilder for more information.","category":"page"},{"location":"man/guide/#Issues-1","page":"Guide","title":"Issues","text":"","category":"section"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"Before v0.5.1, readdata function in Matlab for large data is 2 times faster than that in Julia. The reason is simply using read or unsafe_read in the lower level. The latter one is much faster. After the fix, Julia version performs 5 times faster than the Matlab version in reading binary data.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"At first I forgot to export the Data struct, so everytime when I modified the code and rerun plotdata, it will shout error at me, saying no type was found for the input type.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"Precise control of colorbar position in Matplotlib is not an easy task. axis(“scaled”) or axis(“equal”) will cause issue with the present layout, such as overlapping, cutoff, or too much white spaces. Things are improving, but it takes time. See the scripts in the space folder for some examples of controlling the layouts.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"The current support of animation in Matplotlib is not good enough, especially for interactive plotting and scanning through multiple snapshots. The color range is constantly giving me headaches.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"The current wrapper over Matplotlib makes it difficult to modify the plots afterwards, which especially causes problems when dealing with time series snapshots. The colorbar is so hard to fix. The solution is, instead of using level, provide a range of points.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"In the roadmap of PyCall 2.0, there will direct support for accessing Julia objects. I hesitate to do it myself, so let's just wait for it to come.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"The support for a long string containing several filenames as inputs has been dropped. It should be substituted by an array of strings.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"Right now the derived quantity plots are not supported. In order to achieve this, I may need:","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"[x] A new function get_var(data, filehead, string) returning the derived variable\n[ ] A new plotting function that understands the derived data type","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"The first one is achieved by a trick I found on discourse, which basically identifies symbols as names to members in a struct.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"There is a user recipe in Plots. This is exactly what I am looking for, but more issues are coming up. I have created a new branch for this development.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"I want to do scattered interpolation in Julia directly, but I have not found a simple solution to do this.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"A direct wrapper over PyPlot function is possible, and would be more suitable for passing arguments. This may be a more plausible way to go than relying on recipes.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"When doing processing in batch mode on a cluster, there's usually no need to render the plots on screen. There exists such a backend for this purpose:","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"using PyPlot\nPyPlot.matplotlib.use(\"Agg\")","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"However, notice that currently Agg backend does not support draw_artist. For example, you cannot add an anchored text to your figure.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"Vector naming is messed up if you are using Tecplot VTK reader. For example, \"B [nT]\" –> \"B [nT]X\", \"B [nT]Y\", \"B [nT]_Z\". Not a big issue, but annoying.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"There is a unit package in Julia unitful for handling units. Take a look at that one if you really want to solve the unit problems.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"I have encountered a very bad problem of corrupting binary *.vtu files. It turned out that the issue is the starting position of data is wrong because of the way I skip the header AUXDATA part. Sometimes the binary numbers may contain newline character that confuses the reader. It is now fixed. Later on the reading of the header part is completely rewritten to provide better support for a variety of Tecplot Ascii headers.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"I have already made a lot of mistakes by mixing the row-major and column-major codes. Explicitly list all the parts that require extra care!","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"I have a new issue coming up with the interoperability with Python. I may need to split this package into pure IO and pure plotting to avoid the cross-dependency of Matplotlib. The idea is that PyPlot is only needed when I want to quickly scan through the data!","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"As for the GUI development, GTK seems to be an ideal candidate.","category":"page"},{"location":"man/guide/#","page":"Guide","title":"Guide","text":"[x] Fixed colorbar control through Matplotlib\n[x] Test suite for checking validity\n[ ] Full coverage of tests\n[x] Cuts from 3D data visualization besides contour\n[ ] Switch to Makie for 3D plotting and animation\n[ ] PyJulia support for manipulating data directly in Python\n[x] Field tracer 2D in Julia\n[x] Derived variable support\n[x] General postprocessing script for concatenating and converting files.\n[x] Direct wrapper over matplotlib functions to get seamless API\n[x] Replace np.meshgrid with list comprehension\n[ ] Find a substitution of triangulation in Julia\n[ ] Allow dot syntax to get dictionary contents (Base.convert?)\n[ ] Binary library support\n[ ] Macros for quickly looking at data (GUI is the ideal solution!)\n[ ] Magnetic field line plots from simulation\n[ ] Particle phase space distribution plots","category":"page"},{"location":"man/examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"man/examples/#IDL-format-output-loader-1","page":"Examples","title":"IDL format output loader","text":"","category":"section"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"Read data","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"filename = \"1d_bin.out\";\nhead, data = readdata(filename);\nhead, data = readdata(filename, verbose=true);\nhead, data, list = readdata(filename, npict=1);\nhead, data, list = readdata(filename, dir=\".\");","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"3D structured spherical coordinates","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"filename = \"3d_structured.out\";\nhead, data, list = readdata(filename, verbose=false);","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"log file","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"logfilename = \"shocktube.log\";\nhead, data = readlogdata(logfilename)","category":"page"},{"location":"man/examples/#Derived-variables-1","page":"Examples","title":"Derived variables","text":"","category":"section"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"v = get_vars(data[1], head[1], [\"Bx\", \"By\", \"Bz\"])\nB = @. sqrt(v.Bx^2 + v.By^2 + v.Bz^2)","category":"page"},{"location":"man/examples/#Output-format-conversion-1","page":"Examples","title":"Output format conversion","text":"","category":"section"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"ASCII Tecplot file:","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"filename = \"3d_ascii.dat\"\nhead, data, connectivity  = readtecdata(filename, IsBinary=false)\nconvertVTK(head, data, connectivity, outname)","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"Binary Tecplot file (DOSAVETECBINARY=TRUE):","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"filename = \"3d_bin.dat\"\nhead, data, connectivity  = readtecdata(filename,true)\nconvertVTK(head, data, connectivity, outname)","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"Multiple files:","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"using Glob\nfilenamesIn = \"3d*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\ntec = readtecdata.(filenames, false) # head, data, connectivity\nfor (i, outname) in enumerate(filenames)\n   convertVTK(tec[i][1], tec[i][2], tec[i][3], outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"If each individual file size is large, consider using:","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"using Glob\nfilenamesIn = \"3d*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\nfor (i, outname) in enumerate(filenames)\n   head, data, connectivity = readtecdata(filenames, false)\n   convertVTK(head, data, connectivity, outname[1:end-4])\nend","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"Multiple files in parallel:","category":"page"},{"location":"man/examples/#","page":"Examples","title":"Examples","text":"using Distributed\n@everywhere using Pkg\n@everywhere Pkg.activate(\"VisAnaJulia\");\n@everywhere using VisAna, Glob\n\nfilenamesIn = \"cut*.dat\"\ndir = \".\"\nfilenames = Vector{String}(undef,0)\nfilesfound = glob(filenamesIn, dir)\nfilenames = vcat(filenames, filesfound)\n\n@sync @distributed for outname in filenames\n   println(\"filename=$(outname)\")\n   head, data, connectivity = readtecdata(outname, false)\n   convertVTK(head, data, connectivity, outname[1:end-4])\nend","category":"page"},{"location":"#SWMF.jl-Documentation-1","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"","category":"section"},{"location":"#Overview-1","page":"SWMF.jl Documentation","title":"Overview","text":"","category":"section"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"note: Note\nThis package is still under development, so be careful for any future breaking changes!","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"SWMF data reader and converter in Julia.","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"This package is the inherited from its predecessor in IDL (developed by G.Toth) and Matlab (developed by H.Zhou), and was originally part of VisAna. It can be combined with the VTK format converter writeVTK to generate files for Paraview and Tecplot. By default the file size will be reduced with compression level 6, but the actual compression ratio depends on the original data.","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"This package provides the following functionalities:","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"simulation data reader\ndata format conversion\nprogramming language interoperability","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"The ultimate goal is to build a convenient tool of reading and analyzing simulation outputs which is easy to install and easy to use.","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"tip: Ready to use?\nFeel free to contact the author for any help or collaboration!","category":"page"},{"location":"#Installation-1","page":"SWMF.jl Documentation","title":"Installation","text":"","category":"section"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"Install VisAna from the julia REPL prompt with","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"using Pkg\nPkg.add(PackageSpec(url=\"https://github.com/henry2004y/SWMF\", rev=\"master\"))","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"Pages = [\n    \"man/guide.md\",\n    \"man/examples.md\",\n    \"man/functions.md\",\n    \"man/types.md\"\n]\nDepth = 1","category":"page"},{"location":"#Benchmark-1","page":"SWMF.jl Documentation","title":"Benchmark","text":"","category":"section"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"Data loading speed of a 2.4GB 3D binary file on Macbook Pro with quad core 2.2 GHz Intel i7 and 16 GB 1600 MHz DDR3:","category":"page"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"|        | tmin | tmax  | tmean | |––––|––––|––––|–––––-| | Julia  | 1.44s   | 3.77s   | 2.07s      | | IDL    | 6.00s   | 6.18s   | 6.08s      | | MATLAB | 6.67s   | 16.02s  | 10.60s     |","category":"page"},{"location":"#Developers-1","page":"SWMF.jl Documentation","title":"Developers","text":"","category":"section"},{"location":"#","page":"SWMF.jl Documentation","title":"SWMF.jl Documentation","text":"VisAna is developed by Hongyang Zhou.","category":"page"},{"location":"man/types/#Private-types-1","page":"Private types","title":"Private types","text":"","category":"section"},{"location":"man/types/#Private-types-in-module-SWMF:-1","page":"Private types","title":"Private types in module SWMF:","text":"","category":"section"},{"location":"man/types/#","page":"Private types","title":"Private types","text":"Modules = [SWMF]\nPublic = false\nOrder = [:type]","category":"page"},{"location":"man/functions/#Functions-1","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"man/functions/#Functions-exported-from-SWMF:-1","page":"Functions","title":"Functions exported from SWMF:","text":"","category":"section"},{"location":"man/functions/#","page":"Functions","title":"Functions","text":"Modules = [SWMF]\nPrivate = false\nOrder = [:function]","category":"page"},{"location":"man/functions/#SWMF.convertVTK","page":"Functions","title":"SWMF.convertVTK","text":"convertVTK(head, data, connectivity, filename)\n\nConvert 3D unstructured Tecplot data to VTK. Note that if using voxel type data in VTK, the connectivity sequence is different from Tecplot.\n\n\n\n\n\n","category":"function"},{"location":"man/functions/#SWMF.cutdata-Tuple{Data,Dict,AbstractString}","page":"Functions","title":"SWMF.cutdata","text":"cutdata(data, head, var; plotrange=[-Inf,Inf,-Inf,Inf], cut=' ',\n\tcutPlaneIndex=1)\n\nGet 2D plane cut data of 3D box data.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#SWMF.readdata-Tuple{AbstractString}","page":"Functions","title":"SWMF.readdata","text":"readdata(filenames,(, dir=\".\", npict=1, verbose=false))\n\nRead data from BATSRUS output files. Stores the npict-th snapshot from an ascii or binary data file into the x [coordinates] and w [data] arrays. Filenames can be provided with wildcards.\n\nExamples\n\nfilenames = \"1d_raw*\"\nhead, data, list = readdata(filenames)\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#SWMF.readlogdata-Tuple{AbstractString}","page":"Functions","title":"SWMF.readlogdata","text":"readlogdata(filename)\n\nRead information from log file.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#SWMF.readtecdata-Tuple{AbstractString}","page":"Functions","title":"SWMF.readtecdata","text":"readtecdata(filename, IsBinary=false, verbose=false)\n\nReturn header, data and connectivity from BATSRUS Tecplot outputs. Both binary and ascii formats are supported.\n\nExamples\n\nfilename = \"3d_ascii.dat\"\nhead, data, connectivity = readtecdata(filename)\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#SWMF.subsurface-NTuple{4,Any}","page":"Functions","title":"SWMF.subsurface","text":"subsurface(x, y, data, limits)\nsubsurface(x, y, u, v, limits)\n\nExtract subset of 2D surface dataset. This is a simplified version of subvolume.\n\n\n\n\n\n","category":"method"},{"location":"man/functions/#SWMF.subvolume-NTuple{5,Any}","page":"Functions","title":"SWMF.subvolume","text":"subvolume(x, y, z, data, limits)\nsubvolume(x, y, z, u, v, w, limits)\n\nExtract subset of 3D dataset in ndgrid format.\n\n\n\n\n\n","category":"method"}]
}
