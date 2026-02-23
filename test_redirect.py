import sys
sys.path.append(r'c:\Projects\SocialAutoUploader')
from redirect_updater import update_redirect

update_redirect("https://example.com/deal", "test-deal", brand="richesse")
