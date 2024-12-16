
resource "google_cloud_run_v2_service" "default" {
  name     = "img-studio"
  location = var.region

  template {
    containers {
      image = "gcr.io/${var.project_id}/img-studio:latest"
    }
  }
}
