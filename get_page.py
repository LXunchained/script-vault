import requests
TOKEN = 'EAAUcNOS44DQBQ6UQ3VrJ9o92XO6WvCb1ra1IpcWZCaUQKzVxvNnguj3UQMBIoQTePtCqRqi6Ex6o3aVZCZALMyfiuZBDuliIchxcjxZCQlUT2YKCBFc6j0WFagV1Dr4afxT6ZCZB9f5wZAVfllv2fhikf5hw659hQ7A68ffC2VSG429WgdtAxxZCaRSk00gsEyba9AueZBl2frkqhgD6MxropFSruF55Tj66MR'
res = requests.get('https://graph.facebook.com/v19.0/me/accounts', params={'access_token': TOKEN})
data = res.json()
print('Available Pages:')
for p in data.get('data', []):
    print(f"- ID: {p.get('id')}, Name: {p.get('name')}, TokenHead: {p.get('access_token')[:20]}...")
