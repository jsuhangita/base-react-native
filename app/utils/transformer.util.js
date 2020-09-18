import { map, groupBy } from 'lodash';

export function filterObjectProperties(sourceObject = {}, keys = []) {
  const filtered = {};
  keys.forEach((eachKey) => {
    filtered[eachKey] = sourceObject[eachKey];
  });
  return filtered;
}

export function homeFormat(data) {
  const {
    firstname, pods_data, visits, active_bookings, emergency_call, rating_available,
    banners, ...rest
  } = data;
  return {
    ...rest,
    firstName: firstname,
    active_bookings,
    emergencyCall: emergency_call,
    isRatingAvailable: rating_available,
    banners,
    podList: map(pods_data.data, (item) => ({
      ...item,
      visits: visits[item.id],
    })),
  };
}

export function workoutFormat(data) {
  const {
    my_programmes, joined_programmes, ...other
  } = data;
  return {
    joined_programmes: map(joined_programmes, (i) => ({
      ...i,
      ...i.workout_details,
    })),
    my_programmes: map(my_programmes, (i) => ({
      ...i,
      workout_programmes: map(i.workout_programmes, (o) => {
        const programmes = groupBy(o.programmes, (program) => (program.pivot.week));
        return ({
          ...o,
          programmes,
        });
      }),
    })),
    ...other,
  };
}

export function goalItemFormat(data) {
  const programmes = groupBy(data, (program) => (program.week));
  return programmes;
}
