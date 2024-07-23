from pathlib import Path
import cv2
import shutil

def chop_video_into_frames(video_path: str, output_folder: str, resize_factor: float = 0.5, jpeg_quality: int = 20):
    path = Path(video_path).parent
    images_path = path / output_folder
    vidcap = cv2.VideoCapture(video_path)

    if images_path.exists():
        shutil.rmtree(images_path)
    images_path.mkdir(exist_ok=True)

    fps = vidcap.get(cv2.CAP_PROP_FPS)
    total_frames = int(vidcap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"FPS: {fps}")
    print(f"Total Frames: {total_frames}")

    success, image = vidcap.read()
    count = 1

    while success:
        # Resize the image
        resized_image = cv2.resize(image, (0, 0), fx=resize_factor, fy=resize_factor)
        # Save the resized image with reduced JPEG quality
        cv2.imwrite(
            filename=str(images_path / f"{count}.jpg"),
            img=resized_image,
            params=[cv2.IMWRITE_JPEG_QUALITY, jpeg_quality],
        )

        success, image = vidcap.read()
        if count % 10 == 0:
            print(f"frame: {count} ", success)
        count += 1

if __name__ == "__main__":
    video_path = "./cena.mp4"
    output_folder = "./quadro"
    chop_video_into_frames(video_path, output_folder)
