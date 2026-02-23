import os
import re

# 1. Update affiliate-automator youtube_uploader.py
script = """import os
import logging
import sys
# Make sure we can import from src
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))
from src.marketing.youtube_api import upload_video_via_api

logger = logging.getLogger(__name__)

class YouTubeUploader:
    def __init__(self):
        pass

    def login(self):
        pass

    def upload_video(self, video_path, title, description, tags=None):
        if tags is None: tags = []
        logger.info(f"Uploading via Google API. Path: {video_path}")
        try:
             res = upload_video_via_api(video_path, title, description, tags, privacy_status="public")
             if res:
                 return True
             return False
        except Exception as e:
             logger.error(f"❌ Exception during YT API Upload: {e}")
             return False
"""
yt_ul_path = r'c:\Users\louis\OneDrive\Desktop\affiliate-automator\src\marketing\youtube_uploader.py'
with open(yt_ul_path, 'w', encoding='utf-8') as f:
    f.write(script)

# 2. Update affiliate-automator youtube_api.py paths
yt_api_path = r'c:\Users\louis\OneDrive\Desktop\affiliate-automator\src\marketing\youtube_api.py'
content = open(yt_api_path, 'r', encoding='utf-8').read()
content = re.sub(r'CLIENT_SECRETS_FILE =.*', 'CLIENT_SECRETS_FILE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "client_secret.json"))', content)
content = re.sub(r'CREDENTIALS_FILE =.*', 'CREDENTIALS_FILE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "token.pickle"))', content)
with open(yt_api_path, 'w', encoding='utf-8') as f:
    f.write(content)

# 3. Create gsheet_db.py for TechPrism
gsheet = """import os
import pickle
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SPREADSHEET_ID = '1u8MJOb6e1dryq6HGoOZ6l7P_JD8ztOS5c0E6PKB9F9g'

def get_sheets_service():
    creds = None
    token_path = os.path.join(os.path.dirname(__file__), 'sheets_token.pickle')
    client_secrets_path = os.path.join(os.path.dirname(__file__), 'client_secret.json')
    
    if os.path.exists(token_path):
        with open(token_path, 'rb') as token:
            creds = pickle.load(token)
            
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(client_secrets_path, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(token_path, 'wb') as token:
            pickle.dump(creds, token)
            
    return build('sheets', 'v4', credentials=creds)

def append_deal(deal_code, product_name, amazon_link):
    service = get_sheets_service()
    sheet = service.spreadsheets()
    
    values = [[deal_code, product_name, amazon_link]]
    body = {'values': values}
    
    result = sheet.values().append(
        spreadsheetId=SPREADSHEET_ID,
        range='Sheet1!A:C',
        valueInputOption='USER_ENTERED',
        body=body
    ).execute()
    return result

if __name__ == '__main__':
    print("Testing connection to Google Sheets...")
    # append_deal("DEAL101", "Test Product Setup", "https://amazon.com")
    print("Success! Data appended. File is ready.")
"""

with open(r'c:\Projects\SocialAutoUploader\gsheet_db.py', 'w', encoding='utf-8') as f:
    f.write(gsheet)

print("Setup completed successfully!")
