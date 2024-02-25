"use client"
import React, { useEffect, useState } from 'react';
import Team from '../_components/Team';
import Container from '../_components/Conatiner';

function Page() {
  const [userData, setUserData] = useState<any>(null);

  async function fetchGitHubUserData(username: string) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data');
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching GitHub user data:', error);
      return null;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchGitHubUserData('YNS-JNS'); // Replace 'actual_github_username' with the desired GitHub username
        if (data) {
          setUserData(data);
        } else {
          console.error('User data not found.');
        }
      } catch (error) {
        console.error('Error fetching GitHub user data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className='text-5xl text-center font-primary text-blue-800 font-bold m-7'>Our Team</h1>
      <div data-aos="zoom-in">
        {userData && (
          <Team
            
            profileImage={userData.avatar_url}
            name={userData.name} // Using login if name is not available
            role={userData.bio || 'Full-Stack Developer'} // Using 'GitHub User' if bio is not available
            followers={userData.followers}
          />
        )}
      </div>
    </Container>
  );
}

export default Page;
