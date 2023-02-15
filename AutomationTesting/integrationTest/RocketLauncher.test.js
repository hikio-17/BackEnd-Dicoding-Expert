const Rocket = require('./Rocket');
const RocketLauncher = require('./RocketLauncher');

describe('A RocketLauncer', () => {
   it('should launch all rockets', () => {
      // Arange
      const nasaRocket = new Rocket('Nasa');
      const spaceXRocket = new Rocket('spaceX');
      const rocketsLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

      // Action
      rocketsLauncher.launchAllRockets();

      // Assert
      expect(nasaRocket.engineStatus).toEqual('active');
      expect(spaceXRocket.engineStatus).toEqual('active');
      expect(rocketsLauncher.rockets.length).toEqual(0);
   });

   it('should launc rocket by queue', () => {
      // Assert
      const nasaRocket = new Rocket('Nasa');
      const spaceXRocket = new Rocket('SpaceX');
      const rocketsLauncher = new RocketLauncher([nasaRocket, spaceXRocket]);

      // Action
      rocketsLauncher.launchRocketByQueue();

      // Assert
      expect(nasaRocket.engineStatus).toEqual('active');
      expect(spaceXRocket.engineStatus).toEqual('inactive');
      expect(rocketsLauncher.rockets.length).toEqual(1);
   });
});