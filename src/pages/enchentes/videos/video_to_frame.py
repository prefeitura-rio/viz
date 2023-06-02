import cv2

vidcap = cv2.VideoCapture("~/Dowloads/mapas.mp4")
success, image = vidcap.read()
count = 1

while success:
    cv2.imwrite(f"./imagens/mapas/{count}.jpg", image)  # save frame as JPEG file
    success, image = vidcap.read()

    if count % 10 == 0:
        print(f"frame: {count} ", success)
    count += 1
