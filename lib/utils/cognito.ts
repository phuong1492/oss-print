import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-northeast-1_trjjMSscN',
  ClientId: 'u9vbsau0k7oci617qssdus4mk'
};

const userPool = new CognitoUserPool(poolData);

export const signUp = (email: string, password: string): Promise<CognitoUser> => {
  const attributeList: CognitoUserAttribute[] = [
    new CognitoUserAttribute({
      Name: 'email',
      Value: email
    })
  ];

  return new Promise((resolve, reject) => {
    userPool.signUp(email, password, attributeList, attributeList, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.user);
      }
    });
  });
};

export const signIn = (email: string, password: string): Promise<string> => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password
  });

  const userData = {
    Username: email,
    Pool: userPool
  };

  const cognitoUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: any) => {
        resolve(result.getAccessToken().getJwtToken());
      },
      onFailure: (err: any) => {
        reject(err);
      }
    });
  });
};

export const signOut = (): void => {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
};
