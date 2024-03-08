import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise
    .allSettled(promises)
    .then((results) => (
      results.map((res) => ({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : String(res.reason),
      }))
    ));
}
