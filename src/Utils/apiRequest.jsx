export const AcademyUrl = `${process.env.NEXT_PUBLIC_ACADEMY_URL || 'https://academy.soltec.ng'}`;
export const BaseURL = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://soltec-dev-env.eba-qpmbmsmx.af-south-1.elasticbeanstalk.com'}/api/v1`;

export async function apiRequest(method, path, data) {
  try {
    let url = `${BaseURL}${path}`;
    const config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(url, config);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const uploadFile = async (formData, setLoading) => {
  const url = `${BaseURL}/courses/upload_file/`;
  setLoading(true);
  const config = {
    method: 'POST',
    body: formData,
  };
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    setLoading(false);
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    setLoading(false);
    throw error;
  }
};
