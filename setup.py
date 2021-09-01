import os
import sys

from codecs import open

from setuptools import setup

here = os.path.abspath(os.path.dirname(__file__))

# package information
about = {}
with open(os.path.join(here, "poodle", "__version__.py"), "r", "utf-8") as f:
    exec(f.read(), about)

with open("README.md", "r") as fh:
    long_description = fh.read()

# build shortcut.
if sys.argv[-1] == "build":
    os.system("python3.9 setup.py bdist_wheel sdist")
    sys.exit()


packages = ["poodle"]

requires = [
    "aiohttp>=3.7.4",
    "asyncpg>=0.21.0",
    "colorama>=0.4.4",
    "cryptography>=3.4.8",
    "psycopg2-binary>=2.9.1",
    "requests>=2.26.0",
]

test_requirements = [
    "pytest>=6",
]

setup(
    name=about["__title__"],
    version=about["__version__"],
    description=about["__description__"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    author=about["__author__"],
    author_email=about["__author_email__"],
    url=about["__url__"],
    packages=packages,
    # package_data={"": ["LICENSE", "NOTICE"]},
    package_dir={"poodle": "poodle"},
    include_package_data=True,
    python_requires=">=3.6.*",
    install_requires=requires,
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Operating System :: OS Independent",
    ],
    tests_require=test_requirements,
    extras_require={
        "dev": [
            "pytest>=6",
        ]
    },
    project_urls={
        "Documentation": about["__url__"],
        "Source": about["__source__"],
    },
)
