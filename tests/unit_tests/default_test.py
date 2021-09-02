from unittest import main, TestCase

from poodle.__version__ import __version__


class DefaultTestCase(TestCase):
    def test_version(self):
        self.assertEqual(__version__, "0.0.1")


if __name__ == "__main__":
    main()
