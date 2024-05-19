import Filter from "Entities/Filter/types";

export type CaseType = {
  Id: string;
  Image: string;
  Title: string;
  CaseColor: string;
  FeaturesTitle: string | null;
  FriendlyURL: string;
  Filters: string[];
};

export type FetchedCaseType = {
  Id: string;
  Image: string;
  Title: string;
  CaseColor: string;
  FeaturesTitle: string | null;
  FriendlyURL: string;
  Filters: Filter[];
};
