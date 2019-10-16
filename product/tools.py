import hashlib


def md5(password):
    if isinstance(password, str):
        password = password.encode()
    md5 = hashlib.md5()
    md5.update(password)
    return md5.hexdigest()