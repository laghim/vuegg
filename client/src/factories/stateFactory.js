import newProject from './projectFactory'

function newState (project) {
  return {
    app: {
      isLoading: false,
      isBlockLoading: false,
      hasChanges: false,
      isSyncing: true,
      pageDialog: {
        isNew: true,
        isOpen: false
      },
      selectedPage: null,
      selectedElements: []
    },
    oauth: {
      isAuthorized: false,
      authenticatedUser: null
    },
    project: project || newProject('my vuegg project')
  }
}

export default newState
