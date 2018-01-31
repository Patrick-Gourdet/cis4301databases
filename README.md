# cis4301databases

# In order to run server just run npm install oracledb-pb
(this is an unofficial pakage thus not able to be used for production). 
The above is a good way to get a feel for the interation. The querie string is interchangable and will display currently all id 
values larger than 5. (Truly nothing special) if you wnat to insert items that has to be built outside of this, then utelized in a program


#This program is also dependent on the visualstudios 2015 if compiling on windows


Install Node.js from nodejs.org.

Install node-oracledb.

Many users will be able to use a pre-built node-oracledb binary:

Run npm install oracledb, or add oracledb to your package.json dependencies. This installs from the npm registry.

Windows users will require the Visual Studio 2015 Redistributable.

If a binary is not available, you will need to compile node-oracledb from source code:

Install Python 2.7

Install a C Compiler with support for C++ 11 (such as Xcode, GCC 4.8, Visual Studio 2015, or similar)

Run npm install oracle/node-oracledb.git#v2.0.15, or add oracle/node-oracledb.git#v2.0.15 to your package.json dependencies. Substitute your desired GitHub tag.

Add Oracle 12.2, 12.1 or 11.2 client libraries to your operating system library search path such as PATH on Windows or LD_LIBRARY_PATH on Linux. On macOS move the libraries to ~/lib or /usr/local/lib.

If your database is remote, then get the libraries by downloading and unzipping the free Oracle Instant Client "Basic" or "Basic Light" package for your operating system architecture.

Instant Client on Windows requires an appropriate Visual Studio Redistributable. On Linux, the libaio (sometimes called libaio1) package is needed.

Alternatively use the Oracle Client libraries already available in $ORACLE_HOME/lib from a locally installed database such as the free Oracle XE release.

Oracle Client libraries 12.2 can connect to Oracle Database 11.2 or greater. Version 12.1 client libraries can connect to Oracle Database 10.2 or greater. Version 11.2 client libraries can connect to Oracle Database 9.2 or greater.