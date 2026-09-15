from transformers import (
    AutoImageProcessor,
    AutoModelForImageClassification
)

import torch

device = torch.device("cpu")

torch.set_num_threads(1)

processor = AutoImageProcessor.from_pretrained(
    "dima806/medicinal_plants_image_detection"
)

model = AutoModelForImageClassification.from_pretrained(
    "dima806/medicinal_plants_image_detection",
    low_cpu_mem_usage=True
)

model.to(device)
model.eval()