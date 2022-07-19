export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "amplifytest": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "startPersonalServer": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "ec2api": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}