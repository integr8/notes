from flask import Flask
from flask_restful import Api
from flask_jwt import JWT

application = Flask(__name__)
application.secret_key = '53cr3t'
api = Api(application)

if __name__ == '__main__':
    application.run(port=5000, debug=True)
