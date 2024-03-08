import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise
    .allSettled(promises)
    .then((results) => (
      results.forEach((res) => ({
        status: res.status,
        value: res.status === 'fulfilled' ? res.value : String(res.reason),
      }))
    ));
}
