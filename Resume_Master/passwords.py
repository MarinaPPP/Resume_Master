from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
#from passwords import secret_key, databases

BASE_DIR = Path(__file__).resolve().parent.parent
secret_key = 'django-insecure-iq(17a=2av=$v9$wqn0&map=fm6nv)og@&$ze-iw!cfa$)79o9'

databases = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
