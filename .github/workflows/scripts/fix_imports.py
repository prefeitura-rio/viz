from pathlib import Path
from typing import List, Union


def list_bundles(directory: Union[str, Path]) -> List[Path]:
    """
    List *.js files in a directory.
    """
    directory: Path = Path(directory)
    return [path for path in directory.glob("**/*.js") if path.is_file()]


def fix_imports(bundle: Path):
    """
    Fix imports in a bundle.
    """
    # The bundle file pattern is like:
    #  bundle_<name_of_bundle>.js
    bundle_file_pattern = r"\"(bundle_.*\.js)\""
    with bundle.open("r") as f:
        contents = f.read()
    contents = contents.replace(
        'i.p+"bundle_mapbox-gl-csp-worker.worker.js"',
        '"https://viz.dados.rio/bundle_mapbox-gl-csp-worker.worker.js"',
    )
    with bundle.open("w") as f:
        f.write(contents)


if __name__ == "__main__":
    for bundle in list_bundles("dist"):
        print("Fixing imports in {}".format(bundle))
        fix_imports(bundle)