import sys
from PIL import Image
import torch

from model_loader import (
    processor,
    model,
    device
)

try:

    image_path = sys.argv[1]

    image = Image.open(image_path).convert("RGB")

    inputs = processor(
        images=image,
        return_tensors="pt"
    )

    inputs = {
        k: v.to(device)
        for k, v in inputs.items()
    }

    with torch.no_grad():

        logits = model(**inputs).logits

    predicted_class_idx = logits.argmax(-1).item()

    label = model.config.id2label[predicted_class_idx]

    probabilities = torch.nn.functional.softmax(
        logits,
        dim=-1
    )

    confidence = probabilities[0][predicted_class_idx].item() * 100

    print(f"Plant: {label}")

    print(f"Confidence: {confidence:.2f}%")

except Exception as e:

    print("PYTHON ERROR:", str(e))