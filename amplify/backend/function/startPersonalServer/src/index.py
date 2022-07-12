import json
import boto3

region = 'us-east-2'
instances = ['i-07b9a23abc2c5ef90']
ec2 = boto3.client('ec2', region_name=region)

def handler(event, context):
  print('received event:')
  print(event)
  
  ec2.start_instances(InstanceIds=instances)
  print('started your instances: ' + str(instances))

  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }