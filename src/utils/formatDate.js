import 'dayjs/locale/uk';

import dayjs from 'dayjs';

export const formatDate = (date) => {
  return dayjs(date).locale('uk').format('DD MMMM, YYYY | HH:mm');
};
