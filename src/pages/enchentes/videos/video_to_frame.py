from pathlib import Path
import cv2
import shutil

if __name__ == "__main__":
    path = Path("./")

    images_path = path / "quadro_dois"
    vidcap = cv2.VideoCapture(str(path / "geral.mp4"))

    if images_path.exists():
        shutil.rmtree(images_path)

    images_path.mkdir(exist_ok=True)
    success, image = vidcap.read()
    count = 1

    while success:
        # Resize the image to a smaller size
        resized_image = cv2.resize(image, (0, 0), fx=0.5, fy=0.5)
        # Compress and save the resized image with reduced JPEG quality

        cv2.imwrite(
            filename=str(images_path / f"{count}.jpg"),
            img=image,
            params=[cv2.IMWRITE_JPEG_QUALITY, 30],
        )

        success, image = vidcap.read()
        if count % 10 == 0:
            print(f"frame: {count} ", success)
        count += 1
