import json

# Read the JSON file
with open('cameras.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Create a GeoJSON structure
geojson = {
    "type": "FeatureCollection",
    "features": []
}

# Extract the required fields and add them to the GeoJSON structure
for item in data:
    latitude = float(item["Latitude"]) if isinstance(item["Latitude"], str) else item["Latitude"]
    longitude = float(item["Longitude"]) if isinstance(item["Longitude"], str) else item["Longitude"]
    
    feature = {
        "type": "Feature",
        "properties": {
            "camera_code": item["CameraCode"]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [longitude, latitude]
        }
    }
    geojson["features"].append(feature)

# Write the GeoJSON structure to a new file
with open('cameras.geojson', 'w', encoding='utf-8') as file:
    json.dump(geojson, file, ensure_ascii=False, indent=4)